import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Registrar() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            favouriteSong: '',
            ageRange: '',
            acceptTerms: false,
        },
        validationSchema: Yup.object({

            email: Yup.string()
                .email('correo invalido')
                .required('correo requerido'),

            password: Yup.string()
                .min(8, 'la contraseña debe contener mas de 8 caracteres')
                .required('contraseña requerida'),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'la contraseña debe coincidir')
                .required('confirmacion de contraseña requerida'),

            favouriteSong: Yup.string()
                .required('necesitas seleccionar una cancion'),

            ageRange: Yup.string()
                .required('debes escoger un rango de edad'),

            acceptTerms: Yup.boolean()
                .required('Debes aceptar terminos y condiciones para continuar')
        }),
        onSubmit: (data) => {
            if (data.acceptTerms === true) {
                console.log(data);
                alert("Usuario registrado!");
                formik.resetForm();
                window.location.href = "https://k3nnyoye.netlify.app";
            } else {
                alert("Debes aceptar los términos y condiciones para continuar.");
            }
        }
    });

    return (
        <div className='container'>
            <div className='row justify-content-center p-5'>
                <div className='card text-white bg-dark col-md-6 col-sm-12'>
                    <h2 className="card-header">Registro</h2>
                    <div className='card-body'>
                        <span className='card-text'>
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
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className='form-label'>Repetir Contraseña *</label>
                                    <input
                                        className='form-control'
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className='error'>{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label className='form-label' htmlFor='favouriteSong'>Género musical favorito *</label>
                                    <select className='form-select' name="favouriteSong" 
                                    id='favouriteSong' value={formik.values.favouriteSong} 
                                    onChange={formik.handleChange}  onBlur={formik.handleBlur}>
                                        <option value="0">seleccionar</option>
                                        <option value="salsa">Salsa</option>
                                        <option value="rock">Rock</option>
                                        <option value="bachata">Bachata</option>
                                        <option value="reggaeton">Reggaeton</option>
                                        <option value="dancehall">Dancehall</option>
                                    </select>
                                    {formik.touched.favouriteSong && formik.errors.favouriteSong ? (
                                        <div className='error'>{formik.errors.favouriteSong}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ageRange" className='form-label'>Edad</label>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            id="ageRange1"
                                            name="ageRange"
                                            type="radio"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="menor de 20"
                                            checked={formik.values.ageRange === "menor de 20"}
                                        />
                                    <label htmlFor="ageRange1" className='form-check-label'>menor de 20</label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            id="ageRange2"
                                            name="ageRange"
                                            type="radio"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="entre 20 y 40"
                                            checked={formik.values.ageRange === "entre 20 y 40"}
                                        />
                                        <label htmlFor="ageRange2" className='form-check-label'>entre 20 y 40</label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            id="ageRange3"
                                            name="ageRange"
                                            type="radio"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="mayor a 50"
                                            checked={formik.values.ageRange === "mayor a 50"}
                                        />
                                        <label htmlFor="ageRange3" className='form-check-label'>mayor a 50</label>
                                    {formik.touched.ageRange && formik.errors.ageRange ? (
                                        <div className='error'>{formik.errors.ageRange}</div>
                                    ) : null}
                                    </div>
                                </div>

                                <div className="mb-3">
                                <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            type="checkbox"
                                            // onChange={(e) => formik.setFieldValue("acceptTerms", e.target.checked)}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.acceptTerms}
                                        />
                                        <label htmlFor="acceptTerms" className='form-check-label'>Acepto términos y condiciones *</label>
                                </div>
                                    {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                                        <div className='error'>{formik.errors.acceptTerms}</div>
                                    ) : null}
                                </div>

                                <p className='terms'>* Campos Obligatorios</p>

                                <button type="submit" className="btn btn-primary">Continue</button>
                                
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}
;
