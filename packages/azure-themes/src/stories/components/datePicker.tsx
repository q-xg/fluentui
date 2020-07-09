import * as React from 'react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { addYears, addDays } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const today: Date = new Date(Date.now());
const minDate: Date = addDays(today, -1);
const maxDate: Date = addYears(today, 1);

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

const firstDayOfWeek = DayOfWeek.Sunday;

export const DatePickerBoundedExample: React.FC = () => (
  <DatePicker
    className={controlClass.control}
    isRequired={false}
    firstDayOfWeek={firstDayOfWeek}
    placeholder="Select a date..."
    ariaLabel="Select a date"
    minDate={minDate}
    maxDate={maxDate}
  />
);
