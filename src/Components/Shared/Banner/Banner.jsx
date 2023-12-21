
import RightPannel from "../RightPannel/RightPannel";
import Todo from "../Todo/Todo";
const Banner = ({ theme }) => {
    return (
        <div className="  flex justify-center items-start">

            {/* left container  */}

            <Todo theme={theme} />

            {/* Right container */}
            <RightPannel theme={theme} />
        </div>
    );
};

export default Banner;