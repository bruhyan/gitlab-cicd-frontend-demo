<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          name="input-one"
          data-cy="cy-email-input"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
          data-cy="cy-name-input"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" data-cy="cy-form-submit">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-alert class="message" show v-if="showAlert">Thank you for your submission, {{ form.name }}</b-alert>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true,
        showAlert: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        this.showAlert = true
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>