import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc : string
    dark? : boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props } : PhoneProps) => {
  return (
    <div className={ cn("relative pointer-events-none z-50 overflow-hidden", className) } {...props}>
        <img
            className="z-50 pointer-events-none select-none"
            src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
            alt="phone image"
        />

        <div className="absolute -z-10 inset-0">
            <img
                className="object-cover"
                src={imgSrc}
                alt="overlaying phone image"
            />
        </div>
    </div>
  )
}

export default Phone