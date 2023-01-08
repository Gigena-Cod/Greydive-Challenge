import IconSpinnerComponent from "./IconSpinner.component"


interface SpinnerProps {
    cssClassIcon: string
}

const SpinnerComponent = ({cssClassIcon}:SpinnerProps) => (
    <div className="flex justify-center items-center w-full shadow rounded-md text-white transition ease-in-out duration-150 cursor-not-allowed">
        <IconSpinnerComponent cssClass={cssClassIcon} />
    </div>
)

export default SpinnerComponent