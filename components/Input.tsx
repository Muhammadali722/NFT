import { MessageIcon } from '../icons'
import Button from './Button'
import { useTranslations } from 'next-intl'

const Input = ({ showIcon }: { showIcon?: boolean }) => {

	return (
		<form
			className='w-[463px] relative space-y-[16px] sm:space-y-0'
			autoComplete='off'
		>
			<input
				name='email'
				className='bg-white w-full rounded-[20px] !py-[12px] sm:!py-[19px] pl-[20px] pr-[10px] sm:pr-[210px] outline-none'
				type='email'
				required
				placeholder={('Enter your email here')}
			/>
			<Button
				icon={showIcon && <MessageIcon />}
				iconPosition='left'
				classList='!w-full sm:!w-auto !rounded-tl-[0px] !rounded-bl-[0px] sm:!absolute top-0 right-0 bottom-0 !px-[50px] !py-[12px] sm:!py-[19px]'
			>
				{('Subscribe')}
			</Button>
		</form>
	)
}

export default Input