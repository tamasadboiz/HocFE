import CtdtCard from "../components/ctdtCard"

export default function HomePage() {
  return <>
    <div className="container d-flex flex-column align-items-center">
      <h1>Tuyển sinh</h1>
      <div>Đại học Lạc Hồng là trường đào tạo đa ngành, đa lĩnh vực</div>
      <div>
        <CtdtCard/>
      </div>
    </div>
  </>
}