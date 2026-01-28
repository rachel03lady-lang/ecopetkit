import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");

  // 1. Security Check
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (tag) {
      // 2. Revalidate by Tag (Specific data)
      // Your wordpress.ts uses the tag "site-layout"
      revalidateTag(tag);
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        mode: "tag",
        target: tag,
      });
    } else {
      // 3. Revalidate Everything (Brute force)
      // This clears the cache for the entire site
      revalidatePath("/", "layout");
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        mode: "full-site",
      });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
