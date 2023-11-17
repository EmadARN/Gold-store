import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled((props) => (
  <MuiAccordion
    style={{ backgroundColor: "#fcfcfc" }}
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginTop: "10px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{
          fontSize: "25px",
          color: "#fff",
          margin: "10px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(199,195,139,0.95)" : "#272523",
  color: "#fff",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#FFC436",
    color: "#030f27",
  },
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #fff",
}));

function Faqs() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth={"xl"}>
      <Box>
        <Typography sx={{ fontFamily: "Lalezar" }}>سوالات متداول</Typography>
      </Box>
      <Grid container sx={{ mt: 10 }} spacing={5}>
        <Box>
          <Typography sx={{ fontSize: "22px", fontWeight: "bold", pr: 1 }}>
            درباره طلای آب شده
          </Typography>
        </Box>
        <Grid item xs={12} md={12} sx={{}}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary>
              <Typography variant="h5">طلای آب شده چیست؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                طلای زینتی دست دومی که دیگر قابل استفاده نیست، در آزمایشگاه های
                عیارسنجی معتبر، ذوب شده و به شکل قطعات با ابعاد مختلف، به عنوان
                ماده اولیه صنعت طلاسازی و بین همکاران معامله می‌شود. مزیت طلای
                آب‌شده نسبت به طلای زینتی، خرید و فروش آن بدون هزینه های جانبی
                از جمله اجرت، سود فروشنده و مالیات بر ارزش افزوده است. طلای
                معامله شده در گلدیار از جنس طلای آب‌شده است. و از این جهت برای
                سرمایه گذاری گزینه مناسب تر است.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">عیار چیست؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                به دلیل انعطاف پذیری و نرمی طلای خالص، برای ساخت زیورآلات، آن را
                با فلزات دیگری مانند مس و نقره ترکیب می‌کنند. لذا در قیمت گذاری
                یک قطعه طلا، میزان خلوص طلای موجود در آن اهمیت دارد که برای نشان
                دادن میزان خلوص از شاخصی به نام عیار استفاده می‌شود که عمدتاً بر
                مبنای ۱۰۰۰ یا ۲۴ می‌باشد. به طور نمونه استاندارد طلای استفاده
                شده برای زیورآلات در کشورمان، طلای ۱۸ عیار (از واحد ۲۴) معادل
                عیار ۷۵۰ (از ۱۰۰۰) است که به معنای آن است که ۷۵ درصد از قطعه
                طلای مذکور، طلای خالص بوده و ۲۵ درصد آن فلزات دیگر است. معیار
                خرید و فروش در گلدیار با عیار استاندارد ایران یعنی ۱۸ عیار است.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">انگ چیست؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                یک شماره یا کد شناسایی است که بر روی طلای آب‌شده توسط آزمایشگاه
                عیارسنجی حک می‌شود و به نوعی شناسنامه طلای آب‌شده است. کلیه
                طلاهای عرضه شده در گلدیار دارای انگ و شناسنامه از آزمایشگاه های
                معتبر بوده و قابل استعلام از آزمایشگاه ها یا سامانه نمایش جواب
                انگ طلا می‌باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                چگونه از اصالت طلای اب شده مطلع شویم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                طلای ‌آب‌شده توسط آزمایشگاه‌های معتبر عیار سنجی شده و شماره‌ای
                به عنوان انگ روی آن حک می‌شود. با استعلام تلفنی این شماره از
                آزمایشگاه و یا استعلام اینترنتی آن از سامانه نمایش جواب انگ طلا،
                عیار طلای آب‌شده به شما اعلام می‌گردد.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ mb: 5 }}>
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold", pr: 1 }}>
              درباره سامانه
            </Typography>
          </Box>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary>
              <Typography variant="h5">
                ثبت نام در گلد یار چقدر طول میکشد؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                ثبت نام در گلدیار در تنها کمتر از یک دقیقه انجام می‌شود. ثبت نام
                و احراز هویت در گلدیار ساده بوده و در چند ثانیه اتفاق می‌افتد.
                نیازی نیست به جایی مراجعه کنید یا از خودتان عکس، فیلم یا مدرکی
                بارگذاری کنید. تنها کافی است مالکیت تلفن همراه و حساب‌های بانکی
                که با استفاده از آنها واریز انجام می‌شود متعلق به خودتان باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                آیا مبلغ واریز و خرید روزانه در گلدیار محدود است؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                یکی از مزیت های گلدیار سرعت بالای معاملات و دسترسی سریع مشتریان
                به بازار طلاست به نحوی که مانند هر فروشگاه اینترنتی امکان شارژ
                کیف پول در گلدیار از طریق درگاه خرید اینترنتی مطمئن و اختصاصی،
                برای هر شخص تا سقف ۱۰۰ میلیون تومان به صورت روزانه امکان پذیر
                است. برای مبالغ بالاتر از ۱۰۰ میلیون تومان نیز می‌توانید با
                پشتیبانی تماس بگیرید تا شیوه واریز از طریق مراجعه حضوری به بانک
                برایتان شرح داده شود. لازم به ذکر است معاملات در گلدیار سقف
                قیمتی ندارد. در هر لحظه از شبانه روز می‌توانید به هر میزان از
                موجودی کیف پولتان که می‌خواهید، طلا بخرید یا به هر میزان از
                موجودی طلای خود بفروشید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                آیا مبلغ واریز و خرید روزانه در گلدیار محدود است؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                یکی از مزیت های گلدیار سرعت بالای معاملات و دسترسی سریع مشتریان
                به بازار طلاست به نحوی که مانند هر فروشگاه اینترنتی امکان شارژ
                کیف پول در گلدیار از طریق درگاه خرید اینترنتی مطمئن و اختصاصی،
                برای هر شخص تا سقف ۱۰۰ میلیون تومان به صورت روزانه امکان پذیر
                است. برای مبالغ بالاتر از ۱۰۰ میلیون تومان نیز می‌توانید با
                پشتیبانی تماس بگیرید تا شیوه واریز از طریق مراجعه حضوری به بانک
                برایتان شرح داده شود. لازم به ذکر است معاملات در گلدیار سقف
                قیمتی ندارد. در هر لحظه از شبانه روز می‌توانید به هر میزان از
                موجودی کیف پولتان که می‌خواهید، طلا بخرید یا به هر میزان از
                موجودی طلای خود بفروشید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                تفاوت قیمت خرید و فروش در گلدیار چقدر است؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                همانطور که می‌دانید قیمت طلا همراه با نوسانات لحظه‌ای است. ار
                آنجا که گلدیار متعهد است تمامی معاملات را دقیقا با قیمتی که در
                سایت به کاربر نمایش داده شده به انجام رساند، مجبور است برای پوشش
                اختلاف قیمت طلایی که از قبل خریداری کرده و یا نوسانات قیمتی که
                ممکن است در آینده اتفاق بیافتد، اختلافی جزئی بین قیمت خرید و
                فروش قرار دهد. این تفاوت قیمت خرید و فروش در گلدیار به نحوی
                تنظیم شده تا هم برای کاربران سامانه به‌صرفه بوده و هم بتواند
                ریسک نوسانات قیمتی را پوشش دهد.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">نحوه تعیین قیمت؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                یقیمت لحظه‌ای در گلدیار بر اساس قیمت لحظه‌ای معاملات بازار تهران
                و با استفاده از تکنیک‌های علوم‌داده و هوش مصنوعی در ساعات غیر
                کاری بازار تعیین می‌شود. اگر تفاوتی بین قیمت ارائه شده در گلدیار
                و سایر تابلو‌های قیمتی آنلاین مشاهده کردید توجه داشته باشید قیمت
                گلدیار موثق‌تر و دقیق‌تر است زیرا معاملات در گلدیار کاغذی، صوری
                و یا بدون پشتوانه نبوده و بر اساس این قیمت، معاملات به صورت نقدی
                و لحظه‌ای صورت می‌پذیرد. موجودی طلای خود بفروشید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                آیا میتوان از حساب بانکی شخصی دیگری از گلدیار خرید کرد؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                ثبت نام در گلدیار، نیازمند احراز هویت است و به دستور پلیس فتا و
                با توجه به قوانین و مقررات موجود از جمله قانون مبارزه با
                پولشویی، کلیه تراکنش های بانکی در گلدیار (واریزی و برداشت) صرفاً
                با حساب بانکی خود مشتریان صورت می‌گیرد. لازم به ذکر است فرآیند
                احراز هویت در گلدیار بسیار ساده و در سریعترین زمان ممکن و از
                طریق شبکه بانکی صورت گرفته و برای این کار نیاز به گرفتن تصویر یا
                ویدئو و ارسال و بارگذاری هیچگونه مدرکی ندارید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                آیا همه روزه میتوانم طلای خود را بفروشم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                برای فروش طلا نیز مانند خرید طلا هیچگونه محدودیتی از نظر زمانی و
                مقداری وجود ندارد و در هر ساعتی از شبانه روز و هر ۷ روز هفته و
                حتی ایام تعطیل می‌توانید هر میزان از طلای خود را که می‌خواهید به
                نرخ لحظه‌ای بفروشید و درخواست برداشت موجودی ریالی خود را ثبت
                کنید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h5">
                پول طلای فروخته شده طی چه مدت واریز میشود؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                پس از درخواست برداشت ریالی، در اولین فرصت، درخواست واریز به حساب
                مشتری به صورت پایا ثبت می‌گردد و معمولاً در اولین سیکل تسویه
                پایا (بنا بر دستورالعمل بانک مرکزی) این اتفاق می‌افتد. البته
                امکان تسویه حساب زودتر از موعد در برخی از بانکها وجود دارد و در
                صورت درخواست مشتری و در موارد خاص تسویه آنی نیز امکان پذیر است.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faqs;
