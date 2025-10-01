import { useForm } from "react-hook-form"
function App() {
    const {handleSubmit, register} = useForm()

    const onSubmitForm = (data) =>{
        console.log(data)
    }

    return (
        <div className="App">
            <div className="container">
                <form id={"formUserSubmit"} onSubmit={handleSubmit(onSubmitForm)} className={'form-control'} style={{width:'40%', margin: '30px auto'}}>
                    <label htmlFor="firstNameUser">First Name</label>
                    <input type="text" placeholder={'Enter first name...'} className={'form-control'}
                           id={'firstNameUser'} {...register("firstName")}/>
                    <label htmlFor="lastNameUser">Last Name</label>
                    <input type="text" placeholder={'Enter last name...'} className={'form-control'}
                           id={'lastNameUser'} {...register("lastName")}/>
                    <label htmlFor="phoneUser">Phone</label>
                    <input type="text" placeholder={'Enter phone...'} className={'form-control'} id={'phoneUser'} {...register("phone")}/>
                    <br/>
                    <button type={"submit"} form={'formUserSubmit'} className={'btn btn-success'} style={{width: '100%'}}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default App;
