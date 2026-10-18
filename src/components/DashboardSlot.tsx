import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardSlot({ src, mobile = false }: { src: string; mobile?: boolean }) {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    let active = true;
    const image = new Image();
    image.onload = () => { if (active) setAvailable(true); };
    image.src = src;
    return () => { active = false; };
  }, [src]);
  return (
    <div className={cn("dashboard-slot", mobile && "dashboard-slot-mobile")}>
      {!mobile && <div className="dashboard-slot-bar"><span /><span /><span /><div>Radiance Sphere</div></div>}
      {available ? <img src={src} alt={mobile ? "Radiance Sphere mobile review dashboard" : "Radiance Sphere dashboard overview"} className="h-full w-full object-contain" /> : (
        <div className="dashboard-slot-empty">
          <ImageIcon size={32} strokeWidth={1.3} />
          <span>{mobile ? "Mobile dashboard" : "Your reviews. One clear view."}</span>
          <small>Dashboard screenshot coming soon</small>
          <div className="dashboard-placeholder-lines" aria-hidden="true"><span /><span /><span /></div>
        </div>
      )}
    </div>
  );
}