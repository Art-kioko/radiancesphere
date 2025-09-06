import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  label?: string;
}

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleBack}
      className="mb-6 hover:bg-primary/10"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
}