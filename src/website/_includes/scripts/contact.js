const FORM_URL = "/api/contact";

function contactForm() {
  const toast = document.getElementById("toast");
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
            this.data.name = "";
            this.data.replyTo = "";
            this.data.message = "";
            toast.dispatchEvent(
              new CustomEvent("toast", {
                detail: {
                  text: "Your message was submitted successfully.",
                  isError: false,
                },
                bubbles: true,
              })
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .catch(() => {
          toast.dispatchEvent(
            new CustomEvent("toast", {
              detail: {
                text: "There was an issue submitting your request.",
                isError: true,
              },
              bubbles: true,
            })
          );
        })
        .finally(() => {
          this.loading = false;
        });
    },
  };
}
