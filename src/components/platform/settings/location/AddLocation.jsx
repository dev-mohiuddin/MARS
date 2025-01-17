import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import FormInputField from "@/components/common/from-input-field";
import { locationSchema } from "@/lib/validationSchema"; 
import { Form } from "@/components/ui/form";

function AddLocation() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      name: "",
      code: "",
      codeExt: "",
      city: "",
      state: "",
      country: "",
      latitude: "",
      longitude: "",
    },
  });

  function submit() {
    const values = form.getValues();
    console.log(values);

    
    toast({
      title: "Success",
      description: "Airport added successfully!",
      status: "success",
    });

   
    navigate("/dashboard/locations");
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Add Location</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className="grid w-full items-center gap-4">
              <FormInputField
                name="name"
                placeholder="Enter airport name"
                form={form}
                type="text"
                label="Airport Name"
              />
              <FormInputField
                name="code"
                placeholder="Enter airport code"
                form={form}
                type="text"
                label="Airport Code"
              />
              <FormInputField
                name="codeExt"
                placeholder="Enter extended airport code"
                form={form}
                type="text"
                label="Extended Code"
              />
              <FormInputField
                name="city"
                placeholder="Enter city"
                form={form}
                type="text"
                label="City"
              />
              <FormInputField
                name="state"
                placeholder="Enter state or province"
                form={form}
                type="text"
                label="State / Province"
              />
              <FormInputField
                name="country"
                placeholder="Enter country"
                form={form}
                type="text"
                label="Country"
              />
              <FormInputField
                name="latitude"
                placeholder="Enter latitude"
                form={form}
                type="number"
                label="Latitude"
                step="any"
              />
              <FormInputField
                name="longitude"
                placeholder="Enter longitude"
                form={form}
                type="number"
                label="Longitude"
                step="any"
              />
            </div>

            <div className="mt-5">
              <Button className="w-full">Save</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default AddLocation;
