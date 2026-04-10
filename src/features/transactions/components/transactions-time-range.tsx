import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TransactionsTimeRange() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select time range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="food">Last 7 days</SelectItem>
          <SelectItem value="transportation">Last 30 days</SelectItem>
          <SelectItem value="entertainment">Last 90 days</SelectItem>
          <SelectItem value="utilities">Last 6 months</SelectItem>
          <SelectItem value="healthcare">Last year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
