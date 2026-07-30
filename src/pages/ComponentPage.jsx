import { useParams } from 'react-router-dom'
import { components } from '../constants/components.js'
import { ButtonPage } from './ButtonPage.jsx'
import { LabelPage } from './LabelPage.jsx'
import { InputPage } from './InputPage.jsx'
import { SelectPage } from './SelectPage.jsx'
import { CheckboxPage } from './CheckboxPage.jsx'
import { ComboboxPage } from './ComboboxPage.jsx'
import { DatePickerPage } from './DatePickerPage.jsx'
import { RadioButtonPage } from './RadioButtonPage.jsx'
import { SwitchPage } from './SwitchPage.jsx'
import { TextareaPage } from './TextareaPage.jsx'
import { TimePickerPage } from './TimePickerPage.jsx'
import { CardPage } from './CardPage.jsx'
import { BadgePage } from './BadgePage.jsx'
import { DialogPage } from './DialogPage.jsx'
import { DropdownPage } from './DropdownPage.jsx'
import { TabsPage } from './TabsPage.jsx'
import { AccordionPage } from './AccordionPage.jsx'
import { AvatarPage } from './AvatarPage.jsx'
import { AlertPage } from './AlertPage.jsx'

const pageMap = {
  button: ButtonPage,
  label: LabelPage,
  input: InputPage,
  select: SelectPage,
  checkbox: CheckboxPage,
  combobox: ComboboxPage,
  datepicker: DatePickerPage,
  radiobutton: RadioButtonPage,
  switch: SwitchPage,
  textarea: TextareaPage,
  timepicker: TimePickerPage,
  card: CardPage,
  badge: BadgePage,
  dialog: DialogPage,
  dropdown: DropdownPage,
  tabs: TabsPage,
  accordion: AccordionPage,
  avatar: AvatarPage,
  alert: AlertPage,
}

export function ComponentPage() {
  const { id } = useParams()
  const meta = components.find((c) => c.id === id)

  if (!meta) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl p-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component not found
          </h2>
          <p className="mt-2 text-muted-foreground">
            This component does not exist yet.
          </p>
        </div>
      </div>
    )
  }

  const Page = pageMap[id]
  if (Page) return <Page />

  return <ButtonPage />
}
