import { useRef, useEffect, useState } from "react"


export const RandomFox = (props:{image:string}): JSX.Element =>{
    
    const node = useRef<HTMLImageElement>(null)
    
    const [src, setSrc] = useState(
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    );

    useEffect(()=>{
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSrc(props.image)
                }
              });
            });
            if(node.current){
                observer.observe(node.current);
            }

            return ()=>{
                observer.disconnect()
            }
    },[props.image])

    return <img ref={node}  src={src} width={320} height="auto" className="rounded bg-gray-300" />
}