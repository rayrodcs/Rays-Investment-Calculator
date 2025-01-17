import InputBox from "./InputBox";
import Result from "./result";

export default function UserInput() {
    return (
        <>
            <div id="user-input" className="input-group">
                <p>
                    <InputBox title="Initial Investment" />
                    <br/>
                    <InputBox title="Annual Investment" />
                </p>
                <p>
                    <InputBox title="Expected Return" />
                    <br/> 
                    <InputBox title="Duration" />
                </p>
            </div>
            <Result />
        </>
    )
}