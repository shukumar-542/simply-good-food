import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const FAQS = () => {
    return (
        <div className="py-10">
            <h1 className="text-center text-5xl font-bold text-gray-600">Popular Frequently Asked Questions</h1>
            <p className="max-w-[55%] mx-auto text-center mt-10"><span className="text-green-600  ">Simply Good Food</span> prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery
                services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy
                and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>


            <div className="max-w-7xl mx-auto py-10">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What are the foods like Steel Yat? How does the mail plan work?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How Do I Eat Fresh and Lean?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long do my meals last?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What if I don t eat them all at once?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQS;