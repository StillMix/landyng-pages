// src/types/components.d.ts
import { DefineComponent, Component } from 'vue'

// Общий тип для всех компонентов Vue
export type VueComponent =
  | Component
  | DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>

// Тип для иконок
export interface IconProps {
  width?: string | number
  height?: string | number
  fill?: string
}

export type IconComponent = DefineComponent<IconProps> | Component
