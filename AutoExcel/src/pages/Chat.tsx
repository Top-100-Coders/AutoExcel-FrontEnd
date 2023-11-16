import  { useState } from 'react'
import Industry from '../components/Industry'
import { Textarea } from "/@/components/ui/textarea"

export default function Chat() {

    const [industryPage, setIndustryPage] = useState(true);
  return (
    <div>
      {industryPage&&<Industry />}
      <Textarea placeholder="Type your prompt here." />
    </div>
  )
}
    