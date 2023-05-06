import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import QuiltedImageList from "../component/ImageList";
import ControlledAccordions from "../component/Accordion";
import { Typography } from "@mui/material";
function Tour() {
  return (
    <Container
      sx={{
        marginTop: 1,
        width: "80%",
        height: "400px ",
      }}
    >
      <Box
        sx={{
          paddingY: 1,
          display: "flex",
          gap: 1,
        }}
      >
        <img
          style={{ width: "60%", height: 300 }}
          src="https://hdland.com.vn/wp-content/uploads/2019/08/danh-lam-thang-canh-quy-nhon.jpg"
          alt="img"
        />
        <QuiltedImageList sx={{ width: "40%", height: 300 }} />
      </Box>
      <Box>
        <Typography paddingY={1} variant="h5" component="h2">
          Vịnh Hạ Long
        </Typography>
        <Typography sx={{ textAlign: 'justify'}}variant="body1" component="p">
          Hạ Long - Vịnh Hạ Long - di sản văn hóa được Unesco công nhận - là
          điểm đến lý tưởng của mọi du khách trong và ngoài nước. Chúng tôi xây
          dựng chuyên trang về Hạ Long với mong muốn góp một phần nhỏ bé tô điểm
          vẻ đẹp hùng vĩ và cũng rất nên thơ của một vùng biển, đảo tuyệt vời
          của tổ quốc. Trang web về Hạ Long được xây dựng trên tinh thần tự
          nguyện - bất vụ lợi. Chúng tôi - vì yêu Hạ Long nên mong muốn sưu tầm
          những bài báo hay từ những tờ báo hàng đầu trong nước cũng như những
          bài viết cảm nhận về Hạ Long của nhiều chuyên gia về du lịch. Tất cả
          bài viết đều được trích nguồn đầy đủ.
        </Typography>
      </Box>
        <Box paddingY={1}>
        <Typography variant="h5" component="h2" marginBottom={2}>
            Một số thắc mắc
        </Typography>
        <ControlledAccordions />
        </Box>
    </Container>
  );
}

export default Tour;
