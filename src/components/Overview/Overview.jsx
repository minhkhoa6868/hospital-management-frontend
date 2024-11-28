import OverviewCard from './OverviewCard/OverviewCard';
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <div className="header">Overview</div>
            <div>
                <OverviewCard title="In-patients" count="1234" trend="12%"/>
                <OverviewCard title="Out-patients" count="323134" trend="27%"/>
            </div>
            <div>
                <OverviewCard title="In-patients" count="1234" trend="12%"/>
                <OverviewCard title="Out-patients" count="323134" trend="27%"/>
            </div>
        </div>
    )
}
export default Overview;