import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CardProject = () => {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="rounded-t-2xl bg-gray-100 border-b border-border p-5">
        <div className="flex justify-between items-center gap-2">
          <CardTitle>Card Title</CardTitle>
          <Badge variant='outline' className="font-normal bg-background">Hard</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <p className="line-clamp-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam error magni saepe cumque maiores officiis cum nobis earum nemo voluptate iusto, dolorem eveniet dignissimos asperiores eaque expedita quia</p>
      </CardContent>
    </Card>
  )
}

export default CardProject