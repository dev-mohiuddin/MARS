import RangeLable from "../common/rang-lable"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"


function KeyMetrics({keyMetrics}) {
  return (
    <Card className="w- lg:flex-none">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="heading2">Key Metrics</h2>
          <Select  >
            <SelectTrigger className="w-[100px] border-0">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel  >Today</SelectLabel>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {
          keyMetrics?.map((data, index) => (
            <RangeLable key={index} {...data} />
          ))
        }
      </CardContent>
    </Card>
  )
}

export default KeyMetrics