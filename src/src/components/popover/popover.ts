import { ExtractPropTypes } from "vue";

export const popoverProps = {
	trigger: {
		type:[String],
		value: ['click', 'hover']
	}
}
export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
