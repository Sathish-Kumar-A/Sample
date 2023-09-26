import LeftNav from "./LeftNav"
import RightSection from "./RightSection"

const Dashboard = () => {
  return (
    <div style={{
      display:"flex"
    }}>
      <LeftNav />
      <RightSection />
    </div>
  )
}

export default Dashboard