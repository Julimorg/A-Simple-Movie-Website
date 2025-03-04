import { useState } from "react";
import styled from "styled-components";


const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required.";
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
            isValid = false;
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password = "Password must be at least 6 characters and include an uppercase letter, a number, and a special character.";
            isValid = false;
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage("");
        
        if (validateForm()) {
            setSuccessMessage("Sign-up successful!");
        }
    };

    return (
        <Container>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Full Name</Label>
                    <Input type="text" id="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                    {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" id="email" value={formData.email} onChange={handleChange} error={errors.email} />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <PasswordWrapper>
                        <Input type={showPassword ? "text" : "password"} id="password" value={formData.password} onChange={handleChange} error={errors.password} />
                        <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁"}
                        </PasswordToggle>
                    </PasswordWrapper>
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <PasswordWrapper>
                        <Input type={showPassword ? "text" : "password"} id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
                        <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁"}
                        </PasswordToggle>
                    </PasswordWrapper>
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </FormGroup>
                <Button type="submit">Sign Up</Button>
                {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            </form>
        </Container>
    );
};

export default SignUp;



const Container = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 50%;
    margin: auto;
    text-align: center;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
    border-radius: 5px;
    box-sizing: border-box;
`;

const PasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const PasswordToggle = styled.span`
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: #888;
    &:hover {
        color: #333;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
`;

const SuccessMessage = styled.div`
    color: green;
    font-weight: bold;
    margin-top: 10px;
`;

const Button = styled.button`
    width: 100%;
    background: blue;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: darkblue;
    }
`;