
import React, { useState,useEffect, useMemo } from "react";
import "./App.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import  IconButton  from "@mui/material/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { hover } from "@testing-library/user-event/dist/hover";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import { Article } from "@mui/icons-material";
import { createContext } from "react";
import { useContext } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// this is createContext variable 
const TodoContext = createContext([]);
// this is createContext variable 

const theme = createTheme({
  Typography:{
    fontFamily:["Alexandria"],
  },
  palette:{
    primary:{
        main:"#004d40"
    }
  }
});

// we will add todoApi in App Component page also useState send them to App Component .. 
const todoApi=[
  {
    id:uuidv4(),
    title:"قراءة الكتاب",
    detail:"1111لببلبلبيلل",
    isComplited:false
  },
  {
    id:uuidv4(),
    title:"2قراءة الكتاب",
    detail:"222لببلبلبيلل",
    isComplited:false
  },
  
]

const App = () => {
  const [todos,SetTodos]=useState(todoApi)
  return (

    <ThemeProvider theme={theme}>

    <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
      <TodoContext.Provider value={{todos,SetTodos}}>
        <TodoList/>
      </TodoContext.Provider>
      
    </div>

    </ThemeProvider>
  )
}
export default App;


const TodoList = () => {
    const [dialogTodo,SetDialogTodo]=useState(null)
    const [titleInput, SetTitleInput] = useState("")
    const [showDeleteDialog, SetShowDeleteDialog] = useState(false);
    const [showUpdateDialog, SetShowUpdateDialog] = useState(false);
    const { todos, SetTodos } = useContext(TodoContext);
    const [displayedTodoTypes, SetDisplayedTodoTypes] = useState("all")
 
  
    function openDeletePass(todo){
        SetDialogTodo(todo)
      
        SetShowDeleteDialog(true)
    }
    function openUpdatePass(todo){
        SetDialogTodo(todo)
        SetShowUpdateDialog(true)
    }
    // filteration array

    const completedTodos = useMemo(() => {
       return Array.isArray(todos) ? todos.filter((todo) =>
         todo.isComplited) : [];
       }, [todos]);
    const NotCompletedTodos = useMemo(() => {
        return Array.isArray(todos) ? todos.filter((todo) => 
            !todo.isComplited) : [];
        }, [todos]);

// // or u can write above useMemo in one function but i will comment it 
// // const { completedTodos, NotCompletedTodos } = useMemo(() => {
// //     if (!Array.isArray(todos)) return { completedTodos: [], NotCompletedTodos: [] };
// //     return {
// //         completedTodos: todos.filter((todo) => todo.isComplited),
// //         NotCompletedTodos: todos.filter((todo) => !todo.isComplited)
// //         };
// //         }, [todos]);
  
    let todosBeRendered = todos
    console.log(todosBeRendered)
    if (displayedTodoTypes === "completed") {
      todosBeRendered = completedTodos
    } else if (displayedTodoTypes === "non-completed") {
      todosBeRendered = NotCompletedTodos
    } else {
      todosBeRendered = todos
    }
  
  
    const todoMap = todosBeRendered && Array.isArray(todosBeRendered) ? todosBeRendered.map((t) => {
      return (<Todo key={t.id} todo={t} openDeletePass={openDeletePass} openUpdatePass={openUpdatePass}/>)
    }) : [];
  
    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem("todos"));
      if (Array.isArray(storageTodos)) {
        SetTodos(storageTodos);
      }
    }, []);
  
 
    function changeDisplayedType(e) {
      SetDisplayedTodoTypes(e.target.value)
    }
 
   function handleCheckClick() {
      const newTodo = {
        id: uuidv4(),
        title: titleInput,
        detail: "",
        isComplited: false
      };
  
     let updatedTodos;
  if (!Array.isArray(todos)) {
        updatedTodos = [newTodo];
      } else {
        updatedTodos = [...todos, newTodo];
      }
      SetTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      SetTitleInput("");
    }
  
    function onChangeField(e) {
      SetTitleInput(e.target.value)
    }

    function handleClose() {
        SetShowDeleteDialog(false)

      }
      function handleDeleteConfirm() {
      
        const updateTodo = todos.filter((t) => {
          if (t.id === dialogTodo.id) {
            return false
          } else {
            return true
          }
  
        // u can make above if statement shortcut as below use one of them and comment another 
          // return t.id != todo.id
        })
        SetTodos(updateTodo)
        localStorage.setItem("todos", JSON.stringify(updateTodo))
        SetShowDeleteDialog(false)
      }

      // update function we moved from Todo to here 
      function handleUpdateClose() {
        SetShowUpdateDialog(false)
          }
          function handleUpdateConfirm() {
            const updatedTodos = todos.map((t) => {
              if (t.id === dialogTodo.id) {
                return { ...t, title: dialogTodo.title, detail: dialogTodo.detail }
              } else {
                return t
              }
            })
            SetTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            SetShowUpdateDialog(false)
          }
    return (
     <>
       <div  >
           {/* here we will add Modal (the pop up msg when u press delete) */}
           <Dialog
            style={{ direction: "rtl" }}
            open={showDeleteDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                هل انت متأكد من  رغبتك من حذف المهمة؟
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>إغلاق</Button>
              <Button onClick={handleDeleteConfirm} autoFocus>
                نعم
              </Button>
            </DialogActions>
          </Dialog>
          {/* here we will add Modal (the pop up msg when u press delete) */}
            {/* here we will add Edit Modal Dialog  */}
            <Dialog
            style={{ direction: "rtl" }}
            open={showUpdateDialog}
            onClose={handleUpdateClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

    
            <DialogTitle id="alert-dialog-title">
              تعديل المهمة
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="عنوان المهمة"
                type="email"
                fullWidth
                variant="standard"
                value={dialogTodo.title}
                onChange={((e) => { SetUpdatedTodo({ ...dialogTodo, title: e.target.value }) })}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="التفاصيل"
                type="email"
                fullWidth
                variant="standard"
                value={dialogTodo.detail}
                onChange={((e) => { SetUpdatedTodo({ ...dialogTodo, detail: e.target.value }) })}
              />
  
         </DialogContent>
            <DialogActions>
              <Button onClick={handleUpdateClose}>إغلاق</Button>
              <Button onClick={handleUpdateConfirm} autoFocus>
                تأكيد
              </Button>
            </DialogActions>
          </Dialog>
          {/* here we will add Edit Modal Dialog  */}
          <Container maxWidth="md"   >
            <Card sx={{ minWidth: 475 }} style={{ maxHeight: "80vh", overflow: "scroll" }}>
              <CardContent >
                <Typography variant="h2" gutterBottom sx={{}} color='text.secondary'>
                  مهامي
                </Typography>
                <Divider />
                {/* Filter Button  */}
                <ToggleButtonGroup
                  value={displayedTodoTypes}
                  onChange={changeDisplayedType}
                  style={{ marginTop: "20px" }}
                  exclusive
                  color="primary"
                  aria-label="text alignment"
                >
                  <ToggleButton value="all" >
                    الكل
                  </ToggleButton>
                  <ToggleButton value="completed" >
                    المنجز
                  </ToggleButton>
                  <ToggleButton value="non-completed" >
                    غير المنجز
                  </ToggleButton>
              </ToggleButtonGroup>
                {/* Filter Button  */}
                {/* Todo Component  */}
               {todoMap}
                {/* Todo Component  */}
                {/* below create grid inside add input search with add button  */}
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                  <Grid xs={8}  >
                    <Typography variant="h4" sx={{ textAlign: "right" }} color='text.secondary'>
                      <TextField style={{ width: "100%", direction: "ltr" }} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
                      </Typography>
   
                    {/* This is action button  */}
                    </Grid>
                    <Grid xs={4}  >
                      <Button style={{ width: "100%", height: "100%" }} variant="contained" href="#contained-buttons" onClick={handleCheckClick} disabled={titleInput.length === 0}>
                        Add
                      </Button>
                    </Grid>
                 </Grid>
                  {/* This is action button  */}
                </CardContent>
              </Card>
         </Container>
         </div>
       </>
      )
    }
//    -------------------------------------------------------
  function Todo({ todo, openDeletePass,openUpdatePass }) {
      const { todos, SetTodos } = useContext(TodoContext)
      const [updatedTodo, SetUpdatedTodo] = useState({ title: todo.title, detail: todo.detail })
      // Event Handlers 
      function handleDeleteClick() {
        openDeletePass(todo)
      }
  
    function handleCheckClick() {
        const updateTodos = todos.map((t) => {
          if (t.id === todo.id) {
           if (t.isComplited === true) {
              t.isComplited = false
            } else {
              t.isComplited = true
            }
          }
          return t
        })
        SetTodos(updateTodos)
        localStorage.setItem("todos", JSON.stringify(updateTodos))
      }
      // below is Edit event handlers 
 
      function handleUpdateClick() {
        openUpdatePass(todo)
      }
 
    
   //Event Handlers 
      return (
        <>
          
        <Card className="cardTodo" sx={{ minWidth: 475, background: "blue", color: "white", marginTop: "5px" }}>
    
         <CardContent >
            <Grid container spacing={2}>
                <Grid xs={8}  >
                  <Typography variant="h4" sx={{ textAlign: "right", textDecoration: todo.isComplited ? "line-through" : "none" }} >
                    {todo.title}
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: "right" }} >
                    {todo.detail}
                  </Typography>
                  {/* This is action button  */}
                </Grid>
                <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center">
                  <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{ color: "green", background: todo.isComplited ? "yellow" : "white", border: "solid 3px" }}>
                    <CheckIcon />
                  </IconButton>
    
               <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{ color: "blue", background: "white", border: "solid 3px" }}>
                   <EditOutlinedIcon />
                  </IconButton>
    <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{ color: "red", background: "white", border: "solid 3px" }}>
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
           </CardContent>
        </Card>
        </>
      )
    }
