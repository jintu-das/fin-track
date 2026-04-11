import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TIME_RANGES = [
  { value: "last-7-days", label: "Last 7 days" },
  { value: "last-30-days", label: "Last 30 days" },
  { value: "last-90-days", label: "Last 90 days" },
  { value: "last-6-months", label: "Last 6 months" },
  { value: "last-year", label: "Last year" },
];

export function TransactionsTimeRange() {
  return (
    <Select defaultValue="last-30-days">
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select time range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {TIME_RANGES.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
