import PageBackground from "@/components/PageBackground";
import Container from "@mui/material/Container";

export default function Stats() {
  return (
    <Container maxWidth={false} sx={{height: 1000}}>
      Stats
      <PageBackground imageUrl="https://picsum.photos/600/300?2" />
    </Container>
  )
}
