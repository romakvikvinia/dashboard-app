import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "conic-gradient(at top right, #c76a15, #087ea4, #2b3491)",
      }}
    >
      <Card
        style={{
          width: "30rem",
          backgroundColor: "#ffffffff",
        }}
      >
        <CardBody>
          <Form>
            <h4 className="mb-3 text-center"> {t("Auth.SignIn.Title")}</h4>
            <FormGroup>
              <Label for="exampleEmail">{t("Auth.SignIn.Email")}</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder={t("Auth.SignIn.EmailPlaceholder")}
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">{t("Auth.SignIn.Password")}</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder={t("Auth.SignIn.PasswordPlaceholder")}
                type="password"
              />
            </FormGroup>
            <Button
              style={{
                backgroundImage:
                  "conic-gradient(at top right, #c76a15, #087ea4, #2b3491)",
              }}
              className="w-100"
            >
              Sign In
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SignIn;
