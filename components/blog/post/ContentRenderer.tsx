
import { ContentBlock } from "@/types/blogType";
import Image from "next/image";

type Props = {
  contentBlocks: ContentBlock[] | undefined;
};

const ContentRenderer: React.FC<Props> = ({ contentBlocks }) => {
  if (!contentBlocks) {
    return null;
  }

  return (
    <>
      {contentBlocks.map((block) => {
        switch (block.type) {
          case "heading":
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return <Tag key={block.id}>{block.text}</Tag>;
          case "paragraph":
            return <p key={block.id}>{block.text}</p>;
          case "video":
            // Handle cases where block.url might be undefined or not a valid URL
            let videoId = null;
            try {
              const url = new URL(block.url);
              if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
                videoId = url.searchParams.get("v");
              }
            } catch (error) {
              console.error("Invalid video URL:", block.url);
            }

            if (!videoId) return null;

            return (
              <div key={block.id} className="my-8">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={block.caption || 'Embedded Youtube Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
                {block.caption && (
                  <p className="text-center text-sm text-slate-500 mt-2">
                    {block.caption}
                  </p>
                )}
              </div>
            );
          case "gallery":
            return (
              <div key={block.id} className="my-8 grid grid-cols-2 gap-4">
                {block.images.map((image) => (
                  <div key={image.id} className="relative aspect-square">
                    <Image
                      src={image.url}
                      alt={image.alt || ""}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {image.caption && (
                      <p className="absolute bottom-0 left-0 bg-black/50 text-white text-xs p-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            );
          case "image":
            return (
                <div key={block.id} className="my-8 relative aspect-video">
                    <Image
                        src={block.url}
                        alt={block.alt || ""}
                        fill
                        className="object-cover rounded-lg"
                    />
                    {block.caption && (
                        <p className="text-center text-sm text-slate-500 mt-2">
                            {block.caption}
                        </p>
                    )}
                </div>
            )
          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentRenderer;
