import './OverviewCard.css';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Stack from '@mui/material/Stack';

const OverviewCard = ({title, count, trend}) => {
    return (
        <div className="card">
            <Stack alignItems="bottom" direction="row" gap={0}>
                <div className="icon">
                    <PermIdentityOutlinedIcon/>
                </div>
                <h3>{title}</h3> 
            </Stack>

            <div className="overview_content">
                <p className="count">{count}</p>
                <div className="footer">
                    <span>Last 7 days</span>
                    <span className="trend">
                        
                        {/* <svg data-testid="TrendingUpRoundedIcon"></svg> */}
                            {/* <path d="M2 10 L6 5 L10 8" stroke="#8A56AC" strokeWidth="2" fill="none"/> */}
                        <TrendingUpRoundedIcon sx={{ color: "#8a56ac", fontSize: 12 }}/>
                        {trend}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard;