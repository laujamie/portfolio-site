const FORM_URL = "/api/contact";

function contactForm() {
  return {
    data: {
      name: "",
      replyTo: "",
      message: "",
      subscribe: false,
    },
    loading: false,
    formMessage: "",
    submitForm() {
      this.formMessage = "";
      this.loading = true;
      var queryParams = new URLSearchParams();
      Object.entries(this.data).map(([name, value]) =>
        queryParams.set(name, value)
      );

      fetch(FORM_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      })
        .then((response) => {
          if (response.ok) {
            this.formMessage = "Form submitted successfully";
            this.data.name = "";
            this.data.replyTo = "";
            this.data.message = "";
          } else {
            throw new Error("Something went wrong");
          }
        })
        .catch(() => {
          this.formMessage = "Something went wrong";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  };
}
