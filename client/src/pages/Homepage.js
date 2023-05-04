import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import EditNoteIcon from '@mui/icons-material/EditNote';
import ChatRounded from "@mui/icons-material/ChatRounded";
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';
import JavascriptIcon from '@mui/icons-material/Javascript';
const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        Text Generation
                    </Typography>
                    <Card
                        onClick={() => navigate("/summary")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <DescriptionRounded
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                TEXT SUMAMRY
                            </Typography>
                            <Typography variant="h6">
                                Summarize long text into short sentences
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        Paragraph Generator
                    </Typography>
                    <Card
                        onClick={() => navigate("/paragraph")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <EditNoteIcon
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                Paragraph
                            </Typography>
                            <Typography variant="h6">
                                Generate Paragraph with few words
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        AI ChatBot
                    </Typography>
                    <Card
                        onClick={() => navigate("/chatbot")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <ChatRounded
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                Chatbot
                            </Typography>
                            <Typography variant="h6">Chat With AI Chatbot</Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        Javascript Converter
                    </Typography>
                    <Card
                        onClick={() => navigate("/js-converter")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <JavascriptIcon
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                JS CONVERTER
                            </Typography>
                            <Typography variant="h6">
                                Translate english to javascript code
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        AI  Images
                    </Typography>
                    <Card
                        onClick={() => navigate("/scifi-image")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <ImageSearchRoundedIcon
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                Image generator
                            </Typography>
                            <Typography variant="h6">Generate  images</Typography>
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </>
    );
};

export default Homepage;
