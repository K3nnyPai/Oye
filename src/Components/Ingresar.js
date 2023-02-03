/* eslint-disable react-hooks/rules-of-hooks */
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ingresar() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({

            email: Yup.string()
                .email('correo invalido')
                .required('correo requerido'),

            password: Yup.string()
                .min(8, 'la contraseña debe contener mas de 8 caracteres')
                .required('contraseña requerida'),
        }),
        onSubmit: (data) => {
                console.log(data);
                alert("Usuario Ingresado!");
                formik.resetForm();
                window.location.href = "https://k3nnyoye.netlify.app";
        }
    });

    return (
        <div className="container">
            <div className="row justify-content-md-center p-5">
                <div className="card text-white bg-dark col-md-6 col-sm-12">
                    <h2 className="card-header">Inicio de sesión</h2>
                    <div className="card-body">
                        <span className="card-text">
                            <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                    <label htmlFor="email" className='form-label'>Correo Electronico *</label>
                                    <input
                                    className='form-control'
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='error'>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className='form-label'>Contraseña *</label>
                                    <input
                                        className='form-control'
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='error'>{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <button  type="submit" className="btn btn-primary">
                                Continuar
                            </button>
                        </form>
                    </span>
                </div>
            </div>
        </div>
    </div >
    )
}