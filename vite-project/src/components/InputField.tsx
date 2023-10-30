import "./style.css";

interface Props {
    answer: string;
    setAnswer: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (e: React.FormEvent) => void;
}

function InputField({ answer, setAnswer, handleSearch }: Props) {
    
    return (
        <form
            className="input"
            onSubmit={(e) => handleSearch(e)}
        >

            <input
                type="input"
                onSubmit={ handleSearch }
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter searching word"
                className="input-area">
            </input>
            <button className="input-submit" type="submit">Search</button>
        </form>
    );
}

export default InputField;