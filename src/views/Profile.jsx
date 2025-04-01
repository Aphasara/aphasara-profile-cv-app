import React from 'react'
import { AppBar, Toolbar, Box, Typography, Avatar, Button, Container, TextField } from '@mui/material'
import eye from '../assets/eye.jpg'
import eyeeye from '../assets/eyeeye.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Profile() {
    return (
        <Box sx={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 6, fontSize: '22px', mr: 'auto', fontFamily: "Chonburi", fontWeight: 'bold', opacity: 0.8, letterSpacing: '-0.7px', }}>
                            APHASARA   MAHAWAN
                        </Typography>
                        <Typography sx={{ fontSize: '18px', opacity: 0.7, fontFamily: "Chonburi" }}>
                            Work
                        </Typography >
                        <Typography sx={{ mx: 4, fontSize: '18px', opacity: 0.7, fontFamily: "Chonburi" }}>
                            About
                        </Typography>
                        <Typography sx={{ mr: 4, fontSize: '18px', opacity: 0.7, fontFamily: "Chonburi" }}>
                            Contact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ ml: '10%', justifyContent: 'left', display: 'flex', mt: 8 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 14 }}>
                    <Typography sx={{ fontSize: '80px', color: 'white', fontFamily: "Chonburi", fontWeight: 'bold', lineHeight: '1' }}>
                        HI, I AM<br />APHASARA M.
                    </Typography>
                    <Typography sx={{ fontSize: '18px', color: 'white', mt: 1 }}>
                        นักพัฒนาเว็ปไซต์ฝั่งฟรอนท์เอนท์จากประเทศไทย ที่มีความหลงไหลในการสร้าง<br />เว็ปไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'orangered', width: 190, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px', fontFamily: "Chonburi" }}>CONTACK ME <Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'orangered', fontFamily: "Chonburi", backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'orangered', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
                <Box sx={{ mx: 8 }} />
                <Avatar alt='eye' src={eye} variant='rounded' sx={{ width: 550, height: 600, borderRadius: '30px' }}></Avatar>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 }}>
                <Typography sx={{ ml: 'auto', fontSize: '70px', fontWeight: 'bold', fontFamily: "Chonburi" }}>ABOUT ME</Typography>
                <Box sx={{ mx: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 'auto', mt: 2.5 }}>
                    <Typography sx={{ fontSize: '28px', opacity: 0.9 }}>
                        ดิฉันเป็นนักพัฒนาเว็ปไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน<br />
                        เชียงใหม่ กำลังมองหาโอกาศที่น่าตื่นเต้นในการทำงาน<br />
                        มีพื้นบานการศึกษาด้านวิศวกรรมซอฟแวร์</Typography>
                    <Typography sx={{ mt: 2, fontSize: '16px', opacity: 0.7 }}>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือรั้นและอยากรู้<br />
                        อยากเห็นเกี่ยวกัยการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ<br />
                        เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉันชอบท่องเที่ยว ทำกิจกรรมหาประสบการณ์ใหม่ๆ<br />
                        เพื่อพัฒนาทักษะอยู่เสมอ
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'orangered', width: 250, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px', fontFamily: "Chonburi" }}>DOWLOAD RESUME<Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'orangered', fontFamily: "Chonburi", backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'orangered', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', mt: 6 }}>
                <Avatar alt='eyeeye' src={eyeeye} variant='rounded' sx={{ width: '90%', height: 700, borderRadius: '20px' }}></Avatar>
            </Box>
            <Box sx={{ mt: 6 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8, ml: 5 }}>
                <Typography sx={{ ml: 'auto', fontSize: '70px', fontWeight: 'bold', fontFamily: "Chonburi" }}>MY CAPABILITIES</Typography>
                <Box sx={{ mx: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 'auto', mt: 2.5, ml: 20 }}>
                    <Typography sx={{ fontSize: '16px', opacity: 0.6 }}>
                        ดิฉันมองหาโอกาศในการเพิ่มทักษะใหม่ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์<br />
                        การออกแบบ UX/UI ฐานข้อมูล
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            HTML
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            CSS
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            JAVASCRIPT
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            FLUTTER
                        </Container>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            DART
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            IoT
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            REACT
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontFamily: "Chonburi",
                            }}
                        >
                            DATABASE
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 }}>
                <Typography sx={{ ml: 'auto', fontSize: '70px', fontWeight: 'bold', fontFamily: "Chonburi" }}>MY EXPERIENCE</Typography>
                <Box sx={{ mx: '160px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 'auto', mt: 2.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "Chonburi" }}>Freelancer Developer</Typography>
                        <Typography sx={{ fontSize: '16px', opacity: 0.7, fontFamily: "Chonburi" }}>NOV 2023 - PRESENT</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '16px', opacity: 0.7 }}>
                        พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้งสำหรับเว็ปแอปพลิเคชันโดยใช้ React.js<br />
                        ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ<br />
                        ปรับปรุงความเร็วในการโหลดเว็ปไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ<br />
                        ร่วมพัฒนาและดูแลไลบารคอมโพเนนต์ภายในองค์กร
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "Chonburi" }}>Front-End Intern</Typography>
                        <Typography sx={{ fontSize: '16px', opacity: 0.7, fontFamily: "Chonburi" }}>SEP 2023 - NOV 2023</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '16px', opacity: 0.7 }}>
                        พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML,CSS และ JavaScript<br />
                        ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน<br />
                        WCAG<br />
                        ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 }}>

                <Box display={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '70px', fontWeight: 'bold', fontFamily: "Chonburi" }}>
                        LET's CONNECT
                    </Typography>
                    <Typography sx={{ opacity: 0.7, fontFamily: "Chonburi", fontSize: '20px' }}>
                        Say hello at <u style={{ textDecorationColor: 'orangered', fontSize: '20px' }}>S6419410038@sau.ac.th</u>
                        For more info, here's my <u style={{ textDecorationColor: 'orangered', fontSize: '20px' }}>resume</u>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'orangered', fontFamily: 'Chonburi', backgroundColor: 'transparent', fontSize: '20px' }}>in</Typography>
                        <GitHubIcon sx={{ color: 'orangered', mx: 3 }} />
                        <XIcon sx={{ color: 'orangered', mr: 3 }} />
                        <InstagramIcon sx={{ color: 'orangered' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: '86%' }}>
                        <Typography sx={{ fontFamily: "Chonburi" }}>🧡 2025 Aphasara Mahawan</Typography>
                    </Box>
                </Box>

                <Box sx={{ mx: '100px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2.5, ml: 16 }}>
                    <Typography sx={{ mb: 1, fontFamily: "Chonburi", fontSize: '18px' }}>Name</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3, fontFamily: "Chonburi", fontSize: '18px' }}>Email</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3, fontFamily: "Chonburi", fontSize: '18px' }}>Subject</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3, fontFamily: "Chonburi", fontSize: '18px' }}>Message</Typography>
                    <TextField multiline
                        rows={5} sx={{ width: '500px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Button variant="contained" sx={{ mt: 6, backgroundColor: 'orangered', width: 150, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px', fontFamily: "Chonburi" }}>SUBMIT</Button>
                </Box>
            </Box>
            <Box sx={{ height: '100px' }} />
        </Box>
    )
}

export default Profile