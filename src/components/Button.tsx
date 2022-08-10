import { iButtonProps } from "../interfaces/Interfaces";

export const Button: React.FunctionComponent<iButtonProps> = ({ title, loading, ...rest }) => {
    return (
        <div {...rest}>
            {loading ? <div>Loading...</div> : <button>{title}</button>}
        </div>
    )
}