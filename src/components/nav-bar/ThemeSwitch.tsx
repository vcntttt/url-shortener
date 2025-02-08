'use client'
import { useSwitch, VisuallyHidden, type SwitchProps } from "@heroui/react"
import { SunIcon } from '@/icons/SunIcon'
import { MoonIcon } from '@/icons/MoonIcon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch(props)

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps({ onClick: toggleTheme })}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                'w-8 h-8',
                'flex items-center justify-center',
                'rounded-lg bg-default-100 hover:bg-default-200'
              ]
            })}
          >
            {isSelected ? <SunIcon/> : <MoonIcon/>}
          </div>
      </Component>
    </div>
  )
}
