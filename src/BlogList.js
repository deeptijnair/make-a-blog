import { Link } from "react-router-dom";
import { Heading, Image, SimpleGrid, Text, Box } from "@chakra-ui/react"

const BlogList = (props) => {
    const blogs = props.blogs;
    return (
        <SimpleGrid spacing = {10} minChildWidth="200px" gap={8} padding={10} >                           
            {
                blogs.map((blog) => (
                        <Box  key={blog.id} transition="transform 0.2s" 
                            _hover={{ transform: "scale(1.05)", boxShadow: "md", bg:"teal.100"}}
                            cursor="pointer" boxShadow={"lg"} borderRadius="10px" bg="white" 
                            borderBottomWidth="8px" borderBottomColor="teal.600" fontFamily="sans-serif" >
                            <Box>
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    padding="15px" 
                                    aspectRatio={2 / 1 } 
                                    borderRadius="20px"
                                    width="600px"
                                />
                            </Box>
                            <Box gap="2" padding="15px">
                                <Link to={`/blogs/${blog.id}`}>
                                    <Box paddingBottom="5px">
                                        <Heading>{blog.title}</Heading>
                                    </Box>
                                </Link>
                                <Box>
                                        <Text  lineClamp={3} textStyle="md">{blog.body}</Text>
                                </Box>
                                <Box paddingTop="8px" paddingBottom="5px" fontSize="xs">
                                    <Text>Written by {blog.author}</Text>
                                </Box>
                                <Box paddingTop="5px" paddingBottom="5px" fontSize="xs" float="right">
                                    <Text>Created At</Text>
                                </Box>
                            </Box>
                        </Box>
                ))
            }
       </SimpleGrid>
    );
}

export default BlogList;