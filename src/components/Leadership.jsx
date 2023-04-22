import Heading from "./Heading"
import Wrapper from "./Wrapper"
import { getLeadership } from "@/util/getText"

const Leadership = () => {
  return (
    <div>
      <Wrapper>
        <Heading text="Leadership" />
        <ul className="flex flex-col gap-2 list-disc pl-6">
          {getLeadership().map((text) => (
            <li key={text}>
              {text}
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Leadership
