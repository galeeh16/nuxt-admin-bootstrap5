<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Form Validation</h5>
                </div>
                <div class="card-body">
                    <Form method="post" @submit="handleSubmit" :validation-schema="schema" v-slot="{ values }">

                        <div class=" mb-4">
                            <label for="" class="col-form-label">Username</label>
                            <Field type="text" name="username" label="Username Label" class="form-control" />
                            <ErrorMessage as="div" class="text-danger mt-1" name="username" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Full Name</label>
                            <Field type="text" name="full_name" label="Wkwkwk" class="form-control" />
                            <ErrorMessage as="div" class="text-danger mt-1" name="full_name" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Age</label>
                            <Field v-slot="{ field }" name="age" label="Age Label">
                                <input type="text" name="age" label="Age Label" v-bind="field" class="form-control" />
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="age" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Film</label>
                            <Field as="Multiselect" name="film" v-slot="{ field }">
                                <Multiselect v-bind="field" :options="filmOption" placeholder="Pilih Film" />
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="film" />
                        </div>

                        <div class="mb-4">
                            <label for="tanggal" class="col-form-label">Birth of Date</label>
                            <Field as="VueDatePicker" v-slot="{ field }" name="birth_of_date">
                                <VueDatePicker v-bind="field" placeholder="Pilih tanggal..." name="birth_of_date"
                                    v-model="tanggal" :format="useDateFormat" hide-input-icon :enable-time-picker="false">
                                    <template #clear-icon="{ clear }">
                                        <Icon name="material-symbols:close-rounded" class="close-calendar pe-2"
                                            @click="clear" />
                                    </template>

                                </VueDatePicker>
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="birth_of_date" />
                        </div>

                        <div class="mb-4">
                            <div>
                                <label for="" class="col-form-label">Gender</label>
                            </div>
                            <Field v-slot="{ field }" name="gender" type="radio" value="male">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="male" name="gender" v-bind="field">
                                    <span class="form-check-label">
                                        Laki-Laki
                                    </span>
                                </label>
                            </Field>
                            <Field v-slot="{ field }" name="gender" type="radio" value="female">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="female" name="gender"
                                        v-bind="field">
                                    <span class="form-check-label">
                                        Perempuan
                                    </span>
                                </label>
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="gender" />
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Result:</h5>
                </div>
                <div class="card-body">
                    <pre>{{ inputState }}</pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string, number } from 'yup';
import Multiselect from '@vueform/multiselect';
import VueDatePicker from '@vuepic/vue-datepicker';
import { useDateFormat } from '@/utils/useDateFormat';

const tanggal = ref();
// const dateFormat = useDateFormat();
// console.log(dateFormat)

const schema = object({
    username: string()
        .required().min(3).max(30)
        .matches(/^[\ \'\`a-zA-Z]*$/, { // karakter a-z A-Z'`
            message: 'Invalid character'
        }),
    full_name: string().required().min(3).max(50),
    age: number().required().positive().integer(),
    film: string().required(),
    gender: string().required(),
    birth_of_date: string().required()
});

// https://github.com/vueform/multiselect#installation
const filmOption = ref([
    'Justice Leage',
    'Superman',
    'Iron Man',
    'Guardian of the Galaxy',
]);

const inputState = ref();

function handleSubmit(values) {
    console.log(values)
    inputState.value = values;
}
</script>