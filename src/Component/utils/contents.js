import { VscCalendar } from "react-icons/vsc"
import {BsCurrencyDollar} from "react-icons/bs"
import {GoGraph} from "react-icons/go"
import {CgFileDocument} from "react-icons/cg"
import {VscArrowSwap} from "react-icons/vsc"
import {FaWpforms} from "react-icons/fa"
import {VscTools} from "react-icons/vsc"


const style = { color: "#151D3B", fontSize: "1.5em"}
const style1= { color: "#1E90FF", fontSize: "1.5em"}


const contents = [
    {
        icon:<VscCalendar style={style1}/>,
        text:"Schedule Update"
    },
    {
        icon:<BsCurrencyDollar style={style}/>,
        text:"Budget Meeting"
    },
    {
        icon:<GoGraph style={style}/>,
        text:"Dashboards"
    },
    {
        icon:<CgFileDocument style={style}/>,
        text:"Docs"
    },
    {
        icon:<VscArrowSwap style={style}/>,
        text:"Project Change Request"
    },
    {
        icon:<FaWpforms style={style}/>,
        text:"Forms"
    },
    {
        icon:<VscTools/>,
        text:"Tool"
    },
]


export default contents