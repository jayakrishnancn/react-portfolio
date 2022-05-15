import React, { ReactElement, ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
interface Props {
  heading?: string | ReactNode
  title?: string | ReactNode
  content?: any
  footer?: ReactNode
  image?: ReactElement
}
const Card = (props: React.PropsWithChildren<Props>) => {
  const { heading, content, footer, image, title } = props
  return (
    <div className="bg-white mb-3 p-4 mx-auto max-content-w border rounded-md border-gray-300 shadow-lg">
      {heading && <h1 className="mb-4 font-bold text-center">{heading}</h1>}
      <div className="flex justify-between items-stretch ">
        {image && (
          <div className="w-56 flex-shrink-0 flex-col  items-center flex justify-center">
            {image}
          </div>
        )}
        <div className="pl-5 flex-1 flex flex-col">
          {title && <h2 className="font-bold mb-3">{title}</h2>}
          {content ?? <div className="flex-1 flex"> {props.children} </div> ??
            ""}
        </div>
      </div>
      {footer}
    </div>
  )
}

export default Card
