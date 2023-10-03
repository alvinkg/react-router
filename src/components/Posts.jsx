// Child components will be rendered based on nested routes
import { Outlet } from 'react-router-dom'

export default function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        <Outlet/>
      </div>
    )  
}
  
