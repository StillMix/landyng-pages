export interface CardData {
  icon: string
  title: string
  description: string
  link?: string
}

export interface StatCard {
  icon: string
  number: number
  suffix?: string // например "+" или "%"
  description: string
}

export interface ContactInfo {
  icon: string
  title: string
  value: string
}
