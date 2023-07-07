import { styled } from "styled-components";
import gbrForm from "../../assets/form.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateData } from "../../feature/dataSlice";


const Form = () => {
    const provinces = useSelector((store) => store.covid19.covid19.provinces) ?? [];
    console.log(provinces);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const patientStatus = ['kasus', 'sembuh', 'dirawat', 'meninggal'];

    const [formData, setFormData] = useState({
        provinsi: '',
        status: '',
        jumlah: '',
    });

    const [isFormError, setIsFormError] = useState({
        isSelectedProvinceNull: false,
        isSelectedStatusNull: false,
        isJumlahNull: false,
    });

    const { provinsi, status, jumlah } = formData;
    const { isSelectedProvinceNull, isSelectedStatusNull, isJumlahNull } = isFormError;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateInput = (callbackValidated) => {
        const checkIfSelectedProvinceIsNull = provinsi === '';
        const checkIfSelectedStatusIsNull = status === '';
        const checkIfJumlahIsNull = jumlah === '';
        if (checkIfSelectedProvinceIsNull && checkIfSelectedStatusIsNull && checkIfJumlahIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: true,
                isSelectedStatusNull: true,
                isJumlahNull: true,
            });
        } else if (checkIfSelectedStatusIsNull && checkIfJumlahIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: false,
                isSelectedStatusNull: true,
                isJumlahNull: true,
            });
        } else if (checkIfSelectedProvinceIsNull && checkIfJumlahIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: true,
                isSelectedStatusNull: false,
                isJumlahNull: true,
            });
        } else if (checkIfSelectedProvinceIsNull && checkIfSelectedStatusIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: true,
                isSelectedStatusNull: true,
                isJumlahNull: false,
            });
        } else if (checkIfJumlahIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: false,
                isSelectedStatusNull: false,
                isJumlahNull: true,
            });
        } else if (checkIfSelectedProvinceIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: true,
                isSelectedStatusNull: false,
                isJumlahNull: false,
            });
        } else if (checkIfSelectedStatusIsNull) {
            setIsFormError({
                ...isFormError,
                isSelectedProvinceNull: false,
                isSelectedStatusNull: true,
                isJumlahNull: false,
            });
        } else {
            callbackValidated();
        }
    }


    return (
        <>
            <Container>
                <Image src={gbrForm} alt="Gambar Sampingan" />
                <StyledAddForm>
                    <div className='form'>

                        <div className='form_right'>
                            <h3 className='form_title'>Form Covid</h3>
                            <form onSubmit={updateData}>
                                <div className='form_group'>
                                    <label htmlFor='' className='form_label'>
                                        Provinsi
                                    </label>
                                    <br />
                                    <select name='provinsi' onChange={handleChange} className='form_select'>
                                        <option>- pilih provinsi -</option>
                                        {provinces.map((data, index) => {
                                            return (
                                                <option key={index} value={data.kota}>
                                                    {data.kota}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {isSelectedProvinceNull && <Alert>Wajib memilih provinsi</Alert>}
                                </div>
                                <div className='form_group'>
                                    <label htmlFor='' className='form_label'>
                                        Status
                                    </label>
                                    <br />
                                    <select name='status' onChange={handleChange} className='form_select'>
                                        <option value=''>- pilih status -</option>
                                        {patientStatus.map((status) => {
                                            return (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {isSelectedStatusNull && <Alert>Wajib memilih status</Alert>}
                                </div>
                                <div className='form_group'>
                                    <label htmlFor='' className='form_label'>
                                        Jumlah
                                    </label>
                                    <br />
                                    <input
                                        type='text'
                                        value={jumlah}
                                        name='jumlah'
                                        onChange={handleChange}
                                        className='form_input'
                                    />
                                    {isJumlahNull && <Alert>Wajib mengisi jumlah</Alert>}
                                </div>
                                <Button>Simpan Data</Button>
                            </form>
                        </div>
                    </div>
                </StyledAddForm>


            </Container>
        </>

    )
};

const StyledAddForm = styled.div`
	margin: 4rem 2rem 4rem 2rem;

	.form {
		display: flex;
		flex-direction: column;
	}

	.form_left {
		margin-bottom: 1rem;
		text-align: center;
	}

	.form_text_error {
		color: red;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.form_title {
		color: #118ab2;
		font-size: 2.34rem;
		/* text-align: center; */
	}
	.form_label {
		text-align: left;
	}

	.form_group {
		margin-bottom: 1rem;
	}

	.form_select {
		padding: 0.4rem;
		border-radius: 5px;
		border: 1px solid black;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.form_input {
	
		padding: 0.4rem;
		border-radius: 5px;
		border: 1px solid black;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.form_button {
		padding: 0.8rem 2rem;
		width: 100%;
		border: none;
		border-radius: 10px;
		background-color: #118ab2;
		color: #fff;
		margin-top: 10px;
	}

	
`;

const Container = styled.div`

  display: flex;
  justify-content: center;
    align-items: center;
`;

const Text = styled.div`
margin: 9rem 9rem 9rem 12rem;
font-family: 'Questrial', sans-serif;
  flex: 1;
`;

const Image = styled.img`
margin: 9rem 1rem 9rem 9rem;
  max-width: 30%;
    height: auto;
`;
const Button = styled.button`
  background-color: #06D6A0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-family: 'Questrial', sans-serif;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
      background-color: black;
      color: white;
    };
`;


export default Form
