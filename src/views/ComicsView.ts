import { OrderBy } from '@/apis/marvel/types/comics/methods'
import type { SelectOption } from '@/components/common/Select'
import type { Ref } from 'vue'

export const orderByOptions: SelectOption[] = [
  {
    key: OrderBy.Desc.focDate,
    label: 'FOC Date', // Firm Order Commitment
  },
  {
    key: OrderBy.Asc.title,
    label: 'Title',
  },
  {
    key: OrderBy.Desc.modified,
    label: 'Modified',
  },
  {
    key: OrderBy.Desc.issueNumber,
    label: 'Issue Number',
  },
]

export interface UseIntersectionObserver {
  isSupported: Ref<boolean>
  stop: () => void
}
