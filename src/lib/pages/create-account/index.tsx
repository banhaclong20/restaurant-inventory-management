import { Flex, Box, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import {
  isEmail,
  isMaxLength,
  isMinLength,
  isPattern,
} from "@formiz/validations";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { FieldInput } from "lib/components/Form/FieldInput";
import { useToastSuccess, useToastError } from "lib/components/Form/Toast";

interface FormValueProp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const form = useForm({
    subscribe: { form: true, fields: [""] },
  });

  const handleSubmit = (values: FormValueProp) => {
    setIsLoading(true);
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(async (res) => {
      setIsLoading(false);
      if (res.status === 200) {
        toastSuccess({
          title: "Account created with success!",
          description: "Redirecting to login page in 3s",
        });

        setTimeout(() => {
          router.push("/admin/login");
        }, 3000);
      } else {
        toastError({
          title: "Something went wrong!",
          description: "Please try to submit again or try later",
        });
      }
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded="lg"
          bg="white"
          boxShadow="lg"
          p={8}
          w={{ base: "100%", md: "md" }}
        >
          <Formiz
            id="register-form"
            autoForm
            onValidSubmit={handleSubmit}
            connect={form}
          >
            <Stack spacing={4}>
              <FieldInput
                name="firstName"
                label="First Name"
                required="First Name is required"
                validations={[
                  {
                    rule: isMinLength(2),
                    message: "First Name is too short (min. 2 characters)",
                  },
                  {
                    rule: isMaxLength(20),
                    message: "First Name is too long (max. 20 characters)",
                  },
                  {
                    rule: isPattern(
                      "^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$"
                    ),
                    message:
                      "First Name is invalid, don't use special characters",
                  },
                ]}
              />

              <FieldInput
                name="lastName"
                label="Last Name"
                required="Last Name is required"
                validations={[
                  {
                    rule: isMinLength(2),
                    message: "Last Name is too short (min. 2 characters)",
                  },
                  {
                    rule: isMaxLength(20),
                    message: "Last Name is too long (max. 20 characters)",
                  },
                  {
                    rule: isPattern(
                      "^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$"
                    ),
                    message:
                      "Last Name is invalid, don't use special characters",
                  },
                ]}
              />

              <FieldInput
                name="email"
                label="Email"
                required="Email is required"
                validations={[
                  {
                    rule: isMinLength(5),
                    message: "Email is too short (min. 5 characters)",
                  },

                  {
                    rule: isEmail(),
                    message: "Email is invalid",
                  },
                ]}
              />

              <FieldInput
                name="password"
                type="password"
                label="Password"
                required="Password is required"
                validations={[
                  {
                    rule: isMinLength(4),
                    message: "Password too short (min. 4 characters)",
                  },
                  {
                    rule: isMaxLength(40),
                    message: "Password too long",
                  },
                ]}
              />
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  isLoading={isLoading}
                  size="lg"
                  bg="orange.400"
                  color="white"
                  _hover={{
                    bg: "blue.500",
                  }}
                  isDisabled={isLoading || (form.isSubmitted && !form.isValid)}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align="center">
                  Already a user?{" "}
                  <Link color="blue.400" href="/admin/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Formiz>
        </Box>
      </Stack>
    </Flex>
  );
}
