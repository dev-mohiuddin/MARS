import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";

function BackButton(props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={`${props.className} flex items-center cursor-pointer -ml-1.5 hover:opacity-80`}>
      <Label className="cursor-pointer"><ChevronLeft size={22} /></Label>
      <Label className="cursor-pointer" >Back</Label>
    </div>
  )
}

export default BackButton;
