import {
  Palette,
  Zap,
  Package,
  Smartphone,
  Settings,
  HelpCircle,
  ShieldCheck, // Added for certifications
  Search, // Added for QC
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  industrial_design: Palette,
  mold_making: Package,
  app_development: Smartphone,
  electronic_engineering: Zap,
  quality_control: Search,
  certifications: ShieldCheck,
};
