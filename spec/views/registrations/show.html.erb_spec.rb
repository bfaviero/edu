require 'spec_helper'

describe "registrations/show" do
  before(:each) do
    @registration = assign(:registration, stub_model(Registration,
      :user => "User",
      :course => "Course"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/User/)
    rendered.should match(/Course/)
  end
end
